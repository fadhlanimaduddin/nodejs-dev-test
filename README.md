# HashMicro Test

## Requirement

- Node.js 22.15.0 (disarankan menggunakan version ini agar tidak terjadi eror)

## Cara Menjalankan Aplikasi

1. Buka Terminal
2. Install dependencies: `npm install`
3. Jalankan server: `npm run dev`
4. Buka `http://localhost:4000` pada browser

## Login

- Username: `admin`
- Password: `admin123`

## Penjelasan Logic

### String Matching

Pada String Matching, aplikasi ini akan menghitung persentase kecocokan antara dua string. Aplikasi ini akan menghitung persentase kecocokan antara dua string.

### Bundle Discount

Pada Bundle Discount, aplikasi ini akan menghitung persentase kecocokan antara dua string. Aplikasi ini akan menghitung persentase kecocokan antara dua string.

## Routes

### Auth Routes

- `GET /login` - Menampilkan halaman login
- `POST /login` - Melakukan login
- `GET /logout` - Melakukan logout

### Product Routes

- `GET /products` - Menampilkan halaman produk
- `POST /products/add` - Membuat produk baru
- `GET /products/edit/:id` - Mendapatkan data produk berdasarkan ID
- `POST /products/update/:id` - Mengupdate produk
- `GET /products/delete/:id` - Menghapus produk
- `POST /products/bundle` - Mendapatkan data bundle

### String Match Routes

- `GET /` - Menampilkan halaman awal
- `POST /string-match` - Melakukan string matching
