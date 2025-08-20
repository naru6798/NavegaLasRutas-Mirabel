const Categorias = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} style={{ width: "300px" }} />
        <h2>{titulo}</h2>
        {children}
    </article>
  )
}

export default Categorias