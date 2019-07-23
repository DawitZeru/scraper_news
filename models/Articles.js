var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
var Article = mongoose.model("Article", ArticlesSchema);
model.exports = Articles;
