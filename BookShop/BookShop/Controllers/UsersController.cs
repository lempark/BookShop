using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using BookShop.Models;
using BookShop.Auth;
using Data;

namespace BookShop.Controllers
{ 
    [ApiController]
    public class UsersController : ControllerBase
    {
        private BookShopContext context;

        public UsersController(BookShopContext dbcontext)
        {
            context = dbcontext;
        }

        
            

        [HttpPost("/token")]
        public IActionResult Token(string username , string password)
        {
            var identity = GetIdentity(username, password);

            if(identity == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;

            var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new { accessToken = encodedJwt, role = identity.RoleClaimType };
            return new JsonResult(response);
        }

        private ClaimsIdentity GetIdentity(string username , string password)
        {
            User user = context.Users.FirstOrDefault(x => x.Login == username && x.Password == password);

            if(user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType , user.Login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType , user.Role)
                };

                ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

                return claimsIdentity;
            }

            return null;
        }
    }
}