json.total_pages @products.total_pages
json.next_page @products.next_page

json.products do
  json.array! @products do |product|
    json.id product.id
    json.title product.title
    json.description product.description
    json.country product.country
    json.city product.city
    json.type product.type_art
    json.style product.style
    json.year product.year
    json.height product.height
    json.width product.width
    json.length product.length
    json.category product.category
    json.condition product.condition
    json.price product.price
    json.profit_sharing product.profit_sharing
    json.image_url product.image_url

  end
end
