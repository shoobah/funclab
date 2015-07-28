import movieLists from './movielist'

Array.prototype.concatAll = function () {
  var results = []
  this.forEach(function (subArray) {
    subArray.forEach(function (item) {
      results.push(item)
    })
  })

  return results
}

// Hämta filmtitel och den största boxarten för varje film
let L = movieLists.map((list) => list.videos)
  .concatAll()
  .map((item) => ({
    title: item.title,
    boxarts: item.boxarts.reduce((prev, curr) => {
      if (prev.width * prev.height > curr.width * curr.height) {
        return prev
      } else {
        return curr
      }
    }).url
  })
)

console.log(L)
