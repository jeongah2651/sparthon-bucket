document.addEventListener("DOMContentLoaded", (event) => {
  const buckets = document.querySelectorAll(".bucket");
  buckets.forEach((bucket, index) => {
    const isDone = localStorage.getItem("bucket" + index) === "done";
    if (isDone) {
      bucket.classList.add(".done");
    }
  });
});

const buckets = document.querySelectorAll(".bucket");
buckets.forEach((bucket, index) => {
  bucket.addEventListener("click", function() {
    bucket.classList.toggle("done");
    if (bucket.classList.contain("done")) {
      localStorage.setItem("bucket" + index, "done");
    } else {
      localStorage.setItem("bucket" + index, "");
    }
  });
});