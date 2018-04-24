var messageData = { Thanks for your message.  I will reply to your email as soon as I can! Thanks - Gillian};

window.onload = function()
{
    enableFormSubmit();
}

function enableFormSubmit()
{
    hideElementById("thankYou");
    var form = document.getElementsByTagName("form")[0];
    form.onsubmit = function(event){
		event.preventDefault();
        handleFormSubmit();
        return false;
    };
}

function hideElementById(elementId)
{
    var element = document.getElementById(elementId);
    if (isVisible(element))
    {
        element.style.display = "none";
    }
}

function showElementById(elementId)
{
    var element = document.getElementById(elementId);
    if (!isVisible(element))
    {
        element.style.display = "block";
    }
}

function isVisible(element)
{
    return (element.style.display != "none");
}

function handleFormSubmit()
{
    hideElementById("mainContent");
    displayThankYouMessage();
}

function displayThankYouMessage()
{
    writeThankYouMessage();
    showElementById("thankYou")
	}