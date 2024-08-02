const palindromes = function (pali) {
    let i = pali.length;
    let st = "";
    while (i--) {
        if (pali.charAt(i) != " " && pali.charAt(i) != "," && pali.charAt(i) != "." && pali.charAt(i) != "!" && pali.charAt(i) != "?") {
            st += pali.charAt(i);
        }
    }
    st = st.toLowerCase()
    reverse = st.split("").reverse().join("");
    if (st == reverse) {
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
