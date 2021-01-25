json.product do
  json.id @product.id
  json.title @product.title
  json.country @product.country
  json.city @product.city
  json.description @product.description
  json.type @product.type_art
  json.style @product.style
  json.category @product.category
  json.condition @product.condition
  json.price @product.price
  json.year @product.year
  json.height @product.height
  json.length @product.length
  json.width @product.width
  json.signature @product.signature
  json.image_url @product.image_url

  json.user do
    json.id @product.user.id
    json.username @product.user.username
  end

end
