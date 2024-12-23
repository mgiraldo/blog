/**
* Single quote template.
*/
var tmpl = "<div class=\"quote\"><p>{0}</p><span>{1} on Twitter #loveFD</span></div>";

/**
* List of available quotes.
*/
var quotes = [];
quotes[0] = {user:"Peter Gardner", text:"FlashDevelop is like the skinny supermodel girlfriend that still cleans the house and makes you breakfast."};
quotes[1] = {user:"Joshua Granick", text:"I went from Windows to Linux, full-time for months. After one more day of using FD again, I came back. It's that good."};
quotes[2] = {user:"Abraham Vazquez", text:"FlashDevelop is the most lightweight, fast and sexy AS3 IDE. My ActionScript coding got married with it 2 years ago."};
quotes[3] = {user:"Steve Harvey", text:"FlashDevelop gives me comfort and features of a full-blown IDE without the bulk & learning curve. Fantastic!"};
quotes[4] = {user:"Oliver Joyce", text:"FlashDevelop is pure, sleek coding goodness. Never crashes, really clean and feature packed."};
quotes[5] = {user:"Patric Jonsson", text:"I would never switch back to Mac and FlashDevelop is the only reason. The best AS3 IDE ever!"};
quotes[6] = {user:"Patrick Owens", text:"After doing my Ludum Dare in CS4, switching to FD is like a breath of a million fresh airs at the same time."};
quotes[7] = {user:"Tommy Kjær Andersen", text:"The code completion in FlashDevelop is the best and most productive. Just type complete nonsense, and you still get what you looking for."};
quotes[8] = {user:"Peter Gledhill", text:"FD is simple, uncluttered, super responsive and it's code completion fills in all the bits my brain can not."};
quotes[9] = {user:"Bob Dahlberg", text:"When switching back to ActionScript development in FD from other IDEs it feel like FD reads my mind when I type!"};
quotes[10] = {user:"John Davies", text:"FlashDevelop is such a nice editor I also use it for JS, PHP and HTML!"};

/**
* Print the quotes to the document.
*/
function printQuotes()
{
	quotes.shuffle();
	for (var i = 0; i < 3; i++)
	{
		var picked = quotes[i];
		var parsed = formatString(tmpl, picked.text, picked.user);
		document.write(parsed);
	}
}

/**
* Formats the string with the specified arguments.
*/
function formatString(text)
{
	var result = text;
	for (var i = 1; i < arguments.length; i++)
	{
		var pattern = "{" + (i - 1) + "}";
		while (result.indexOf(pattern) >= 0)
		{
			result = result.replace(pattern, arguments[i]);
		}
	}
	return result;
}

/**
* Shuffle extension for array.
*/
Array.prototype.shuffle = function()
{
	var s = [];
	while (this.length) s.push(this.splice(Math.random() * this.length, 1)[0]);
	while (s.length) this.push(s.pop());
	return this;
}
