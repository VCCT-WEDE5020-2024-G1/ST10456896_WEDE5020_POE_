
function clearField(input) {
    if (input.defaultValue === input.value) {
        input.value = '';
    }
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Name is required.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Email is required.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Message is required.');
        message.focus();
        return false;
    }

    return true;
}

<script>
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
</script>


