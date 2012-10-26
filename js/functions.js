// JavaScript Document

function moveToBottom()
{
	pos=$("#title").position();
	if (pos.top < 400)
		$("#title").animate({"top": "+=50%"}, "slow");
}