function startTest() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const regid = document.getElementById("regid").value;
  const domain = document.getElementById("domain").value;

  if (!name || !phone || !regid || !domain) {
    alert("Please fill all details");
    return;
  }

  document.getElementById("statusBox").classList.remove("hidden");
  document.getElementById("statusText").innerText =
    "Thank you " + name + ".\n\n" +
    "Your assessment for '" + domain + "' has been successfully submitted.\n\n" +
    "📢 Result will be announced within 24 hours.\n\n" +
    "You will be contacted if shortlisted.";
}
