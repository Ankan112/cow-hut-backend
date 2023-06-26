## Live link:

## Application Routes:

### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/648fe8206fac3b26494b1166 (Single GET)
- api/v1/users/648fe8206fac3b26494b1166 (PATCH)
- api/v1/users/648fe8206fac3b26494b1166 (DELETE)

### Cow

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/6491fbde2db5fd5e1c26c1a7 (Single GET)
- api/v1/cows/6491fbde2db5fd5e1c26c1a7 (PATCH)
- api/v1/cows/6491fbde2db5fd5e1c26c1a7 (DELETE)

## Pagination and Filtering routes of Cows

- api/v1/cows?page=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=120000&maxPrice=300000
- api/v1/cows?location=Dhaka
- api/v1/cows?searchTerm=gir

### Orders

- api/v1/orders (POST)
- api/v1/orders (GET)
