const book = {
  title: 'Mafalda',
  author: 'Unknown',
  pages: 34,
  isRead: false,
  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? "Yes" : "No"}`;
  },
};

console.log(book.summary());
