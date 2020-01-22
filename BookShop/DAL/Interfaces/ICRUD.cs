using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Interfaces
{
    interface ICRUD<T>
    {
        void Create(T targetObj);

        IQueryable<T> Read();


    }
}
