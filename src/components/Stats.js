

export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>
            No Items yet! Start Adding some 🎯</em>
        </p>
      );
  
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed === true).length;
    const percent = Math.round((packedItems / numItems) * 100)
  
    return (
      <footer className="stats">
        <em>
          {percent === 100
            ? `You have got everything you need ✈` :
            `You have ${numItems} items on your list, and you already packed ${percent}%`
          }
        </em>
      </footer>
    )
  }
  