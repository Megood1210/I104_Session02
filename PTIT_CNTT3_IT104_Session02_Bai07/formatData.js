
function formatDate(dateString) {
    const date = new Date(dateString);

    let day = date.getDate();        // Lấy ngày trong tháng (1-31)
    let month = date.getMonth() + 1; // Lấy tháng (0-11) => cộng thêm 1
    let year = date.getFullYear();   // Lấy năm (4 chữ số)

    // Thêm tiền tố 0 nếu ngày hoặc tháng < 10
    if (day < 10){
        day = "0" + day;
    }
    if (month < 10){ 
        month = "0" + month;
    }
    return `${day}/${month}/${year}`;
}

// Export hàm formatDate để sử dụng ở file khác
export { formatDate };
