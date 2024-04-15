// Hàm `calculate(operation)` trong đoạn mã JavaScript này có chức năng thực hiện phép tính số học (cộng, trừ, nhân, chia) dựa trên giá trị của hai ô input và hiển thị kết quả lên trang web.

// 1. Đầu tiên, hàm lấy giá trị của hai ô input `inputA` và `inputB` bằng cách sử dụng phương thức `getElementById()` để truy cập vào các phần tử HTML có id tương ứng. Sau đó, chúng ta sử dụng `parseFloat()` để chuyển đổi giá trị nhập vào từ kiểu chuỗi sang kiểu số thực (float).

// 2. Tiếp theo, hàm kiểm tra xem giá trị nhập vào của `inputA` hoặc `inputB` có phải là NaN (không phải số) hay không bằng cách sử dụng `isNaN()`. Nếu một trong hai giá trị là NaN, hàm sẽ hiển thị một thông báo lỗi tương ứng và kết thúc hàm bằng câu lệnh `return`.

// 3. Nếu cả hai giá trị đều là số, hàm sẽ thực hiện phép tính tương ứng dựa trên giá trị của biến `operation` (tức là phép toán được yêu cầu). Để thực hiện điều này, chúng ta sử dụng một câu lệnh `switch`, trong đó mỗi `case` tương ứng với một phép toán (SUM, SUBTRACT, MULTIPLY, DIVIDE). Sau khi thực hiện phép tính, kết quả được lưu vào biến `result`.

// 4. Cuối cùng, kết quả được hiển thị trên trang web thông qua phương thức `getElementById()` để truy cập phần tử có id là "result" và cập nhật nội dung của phần tử đó với kết quả tính toán.

// Điều này giúp ứng dụng của bạn có thể thực hiện các phép tính cơ bản và hiển thị kết quả một cách đáng tin cậy.

function calculate(operation) {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);
    var result;

    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    switch (operation) {
        case "SUM":
            result = inputA + inputB;
            break;
        case "SUBTRACT":
            result = inputA - inputB;
            break;
        case "MULTIPLY":
            result = inputA * inputB;
            break;
        case "DIVIDE":
            if (inputB === 0) {
                document.getElementById("result").textContent = "Cannot divide by zero.";
                return;
            }
            result = inputA / inputB;
            break;
        default:
            document.getElementById("result").textContent = "Invalid operation.";
            return;
    }

    document.getElementById("result").textContent = "Result: " + result;
}

function resetInputs() {
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").textContent = "";
}
// Trong đoạn mã HTML `<button onclick="resetInputs()">RESET</button>`, chúng ta có một thẻ `<button>` được sử dụng để tạo ra một nút trong giao diện người dùng. Khi người dùng click vào nút này, một hành động sẽ được thực hiện.

// Trong trường hợp này, chúng ta đặt thuộc tính `onclick` trong thẻ `<button>`, với giá trị là `"resetInputs()"`. Khi người dùng click vào nút "RESET", hàm JavaScript có tên là `resetInputs` sẽ được gọi để thực hiện các hành động cần thiết.

// Về hành động cụ thể, hàm `resetInputs` có nhiệm vụ làm trống các ô input, tức là đặt giá trị của các ô input về chuỗi rỗng. Điều này giúp người dùng dễ dàng nhập dữ liệu mới sau khi đã thực hiện một phép tính hoặc muốn bắt đầu một tính toán mới.