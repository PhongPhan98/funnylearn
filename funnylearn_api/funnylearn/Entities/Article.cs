namespace funnylearn.Entities
{
    public class Article : BaseEntity
    {
        public int ArticleId { get; set; }  
        public string Title { get; set; }
        public string Content  { get; set; }
        public string Author { get; set; }  
    }
}
