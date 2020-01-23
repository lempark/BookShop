using System;

namespace Data.Interfaces
{
	public interface IBook
	{
		double Price { get; set; }

		string Name { get; set; }

		string Author { get; set; }
	}
}

