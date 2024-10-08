using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace GdprAPI.Models
{
    public class ProductDetails
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("Name")]
        public string Name { get; set; }
        public string? Description { get; set; }
        public int Price { get; set; }
        public int Stock { get; set; }
    }
}
