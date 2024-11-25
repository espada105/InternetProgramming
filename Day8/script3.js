//<script>
    function addNumbers() {
        let a = document.getElementById("inputA").value;
        let b = document.getElementById("inputB").value;
        
        a = Number(a);
        b = Number(b);
        
        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').innerText = "숫자를 올바르게 입력해주세요.";
            return;
        }
        const sum = a + b;

        document.getElementById('result').innerText = `A와 B를 더한 결과는 ${sum}입니다.`;
    }
//</script>
