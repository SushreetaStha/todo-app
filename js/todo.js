class Todo {
  content;
  category;
  isCompleted;
  createdDate;
  modifiedDate;

  constructor(content, category) {
    this.content = content;
    this.category = category;
    this.isCompleted = false;
    this.createdDate = new Date().getTime();
    this.modifiedDate = new Date().getTime();
  }

  createElement() {}
}
