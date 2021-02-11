// intentionally importing file from outside of vite root
import file from "../file.svg"

// /@fs/C:/path/to/vite-1982/file.svg
console.log(file)

// 404, internally tries to fetch C:/C:/path/to/vite-1982/file.svg
fetch(file)
