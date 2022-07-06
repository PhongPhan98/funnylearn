using funnylearn.Entities;
using funnylearn.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace funnylearn.Repositories
{
    public class ArticleRepository : IArticleRepository
    {
        public Task<Article> AddArticle(int Id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Article> GetArticle(int Id)
        {
            throw new System.NotImplementedException();
        }

        public Task<IList<Article>> GetArticles()
        {
            throw new System.NotImplementedException();
        }
    }
}
