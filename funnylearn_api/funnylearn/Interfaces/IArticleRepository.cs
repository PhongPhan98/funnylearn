using funnylearn.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace funnylearn.Interfaces
{
    public interface IArticleRepository
    {
        Task<IList<Article>> GetArticles();
        Task<Article> GetArticle(int Id);
        Task<Article> AddArticle(int Id);
    }
}
