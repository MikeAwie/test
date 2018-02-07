import Posts from "/imports/api/posts/collection";

Posts.before.insert(function (userId, doc) {
  doc.userId = userId;
  doc.createdAt = Date.now();
  doc.updatedAt = Date.now();
});
Posts.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set.updatedAt = Date.now();
});