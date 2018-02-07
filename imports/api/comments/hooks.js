import Comments from "/imports/api/comments/collection";

Comments.before.insert((userId, doc) => {
    doc.createdAt = Date.now();
    doc.userId = userId;
});