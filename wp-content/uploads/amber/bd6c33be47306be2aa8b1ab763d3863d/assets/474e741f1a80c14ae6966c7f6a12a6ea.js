
// copyright 2006, all rights reserved
// code contributions and licensing inquiries welcomed
// email us

function CANDY() {};

CANDY.root = 'http://www.zefrank.com/theshow/site4';
CANDY.tags = '';
CANDY.link = "";
CANDY.link2 = "";

CANDY.rp = function(s)
{
    var x = s.replace(/'/g, "&#39;");
    x = x.replace(/"/g, "&#39;");
    return x;
}

CANDY.topZone = function()
{
    if (!x) return;
    if (!x.items) return;

    var last = 5;

    for (var i=0; i < x.items.length; i++)
    {
        var img = "<img id='gimme" + i +"' style='border:0px;margin-right:2px' src='" + CANDY.root + "/candy";

        var msg = CANDY.rp(x.items[i].message);

        var subtype = x.items[i].subtype;

        if (x.items[i].type == 5)
        {
            x.items[i].type = 1;
            subtype = 20;
        }

        if (x.items[i].type == 1)
        {
            if ((subtype < 20) && (last == 5))
            {
                last = 0;
                document.write("<br />");
            }

            img += "/jewel" + subtype + ".gif' width='9' height='11'";

            img += " onmouseover='javascript:CANDY.showTag(\"" + msg + "\");CANDY.hi(" + i + "," + subtype + ", \"o\");'";
            img += " onmouseout='javascript:CANDY.restoreTag();CANDY.hi(" + i + "," + subtype + ", \"\");'";
        }
        else if (x.items[i].type == 2)
        {
            if ((subtype < 20) && (last == 5))
            {
                last = 0;
                document.write("<br />");
            }

            img += "/littleduckie" + subtype + ".gif' width='9' height='11'";

            img += " onmouseover='javascript:CANDY.showTag(\"" + msg + "\");CANDY.quack(" + i + "," + subtype + ", \"o\");'";
            img += " onmouseout='javascript:CANDY.restoreTag();CANDY.quack(" + i + "," + subtype + ", \"\");'";
        }
        else
        {
            continue;
        }


        img += " alt='' />";

        document.write(CANDY.link + img + CANDY.link2);
    }
}

CANDY.bottomZone = function()
{
    if (!x) return;
    if (!x.items) return;

    CANDY.tags = document.getElementById('thetags').innerHTML;

    var c = 0;
    var t = 1;

    var last = 6;

    for (var i=0; i < x.items.length; i++)
    {
        var xt = x.items[i].type;
        if ((xt != 3) && (xt != 6)) continue;

        var img;

        if (xt == 3)
        {
            if (last == 6)
            {
                last = 3;
                document.write("<br />");
                document.write("<div id='big" + t + "'>&nbsp;</div>");

                c = (t++ % 2) ? 1 : 0;
            }

            img = "<img id='gimme" + i +"' style='border:0px;margin-right:4px;' src='" + CANDY.root + "/candy/bigduckie.gif' width='80' height='91'";
        }
        else
        {
            img = "<img id='gimme" + i +"' style='border:0px;margin-right:4px;margin-bottom:2px;margin-top:4px;' src='" + CANDY.root + "/candy/heart.gif' width='87' height='77'";
        }

        var msg = CANDY.rp(x.items[i].message);

        img += " onmouseover='javascript:CANDY.bigShow(\"" + msg + "\"," + t + ");'";
        img += " onmouseout='javascript:CANDY.bigHide(" + t + ");'";

        img += " alt='' />";

        document.write(CANDY.link + img + CANDY.link2);

        c++;
        if (c == 5)
        {
            document.write("<br />");
            document.write("<div id='big" + t + "'>&nbsp;</div>");

            c = (t++ % 2) ? 1 : 0;
        }
    }

    document.write("<br />");
    document.write("<div id='big" + t + "'>&nbsp;</div>");

//    document.write("<br /><br /><br />valentine duckies are still available and show up immediately on this page<br />");
//    document.write("<a style='color: #EB2D2E; text-decoration:underline;' href='http://www.gimmesomecandy.com/zefrank/valentine' target='_blank'>buy one now</a>");
}


CANDY.blingZone = function()
{
    if (!x) return;
    if (!x.items) return;

    for (var i=0; i < x.items.length; i++)
    {
        if (x.items[i].type != 4) continue;

        var img = "<img id='gimme" + i +"' style='border:0px;margin-right:4px;' src='" + CANDY.root + "/candy/blingduckie.gif' width='137' height='150'";

        var msg = CANDY.rp(x.items[i].message);

        img += " onmouseover='javascript:CANDY.blingShow(\"" + msg + "\"," + i + ");'";
        img += " onmouseout='javascript:CANDY.blingHide(" + i + ");'";

        img += " alt='' />";

        document.write(CANDY.link + img + CANDY.link2);

        document.write("<br />");
        document.write("<div id='bling" + i + "'>&nbsp;</div>");
    }
}

CANDY.hi = function(id, color, over)
{
    document.getElementById('gimme' + id).src = CANDY.root + "/candy/jewel" + color + over + ".gif";
}

CANDY.quack = function(id, color, over)
{
    document.getElementById('gimme' + id).src = CANDY.root + "/candy/littleduckie" + color + over + ".gif";
}


CANDY.showTag = function(s)
{
    document.getElementById('thetags').innerHTML = s;
}

CANDY.restoreTag = function(s)
{
    document.getElementById('thetags').innerHTML = CANDY.tags;
}

CANDY.bigShow = function(s, id)
{
    var x = document.getElementById('big' + id);
    x.innerHTML = s;
}

CANDY.bigHide = function(id)
{
    var x = document.getElementById('big' + id);
    x.innerHTML = "&nbsp;";
}

CANDY.blingShow = function(s, id)
{
    var x = document.getElementById('bling' + id);
    x.innerHTML = s;
}

CANDY.blingHide = function(id)
{
    var x = document.getElementById('bling' + id);
    x.innerHTML = "&nbsp;";
}
