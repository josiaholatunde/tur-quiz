import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        /* <h1> My name is Olatunde </h1> */
        Node htmlTagOne = new Node("h1", "My name is Olatunde", false);

        /*
        <html lang="en">
            <head class="different">
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta description="Fashion Website" >
                <title>Document</title>
            </head>
          </html>
        */

        Node rootHtmlTag = new Node("html", null, false);
        rootHtmlTag.addAttribute("lang", "en");

        Node htmlMetaTagOne = new Node("meta", null, true);
        htmlMetaTagOne.addAttribute("charset", "UTF-8");

        Node htmlMetaTagTwo = new Node("meta", null, true);
        htmlMetaTagTwo.addAttribute("http-equiv", "X-UA-Compatible");
        htmlMetaTagTwo.addAttribute("content", "IE=edge");

        Node htmlMetaTagThree = new Node("meta", null, true);
        htmlMetaTagThree.addAttribute("name", "viewport");
        htmlMetaTagThree.addAttribute("content", "width=device-width, initial-scale=1.0");

        Node htmlMetaTagFour = new Node("meta", null, true);
        htmlMetaTagFour.addAttribute("description", "Fashion Website");

        Node htmlTitleTag = new Node("title", "Document", false);

        Node htmlHeadTag = new Node("head", null, false, Arrays.asList(
                htmlMetaTagOne, htmlMetaTagTwo, htmlMetaTagThree, htmlMetaTagFour, htmlTitleTag
        ));
        htmlHeadTag.addAttribute("class", "different");
        htmlHeadTag.setParent(rootHtmlTag);
    }
}
