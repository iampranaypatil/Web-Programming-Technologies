function validateForm() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var email = document.getElementById('email').value;

    // Validate ID
    if (id.trim() === '') {
      alert('ID cannot be empty');
      return false;
    }

    // Validate Name
    if (name.trim() === '') {
      alert('Name cannot be empty');
      return false;
    }

    // Validate Date
    if (date.trim() === '') {
      alert('Date cannot be empty');
      return false;
    }

    // Validate Email
    if (email.trim() === '') {
      alert('Email cannot be empty');
      return false;
    }

    // Check Email Format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return false;
    }

    // All validations passed
    // Submit the form
    document.getElementById('mydiv').innerHTML='id:'+id+'<br/>name:'+name+'<br/>date:'+date+'<br/>Email:'+email;
    return true;
  }