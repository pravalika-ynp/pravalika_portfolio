document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  document.getElementById('image-upload-1').addEventListener('change', function(event) {
    previewImage(event, 'image-preview-1');
  });
  
  document.getElementById('image-upload-2').addEventListener('change', function(event) {
    previewImage(event, 'image-preview-2');
  });
  
  document.getElementById('image-upload-3').addEventListener('change', function(event) {
    previewImage(event, 'image-preview-3');
  });
  
  document.getElementById('image-upload-4').addEventListener('change', function(event) {
    previewImage(event, 'image-preview-4');
  });
  
  function previewImage(event, previewId) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgElement = document.getElementById(previewId);
      imgElement.src = e.target.result;
      imgElement.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
  