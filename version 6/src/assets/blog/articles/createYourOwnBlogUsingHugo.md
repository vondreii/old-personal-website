#### 27 Nov 2020
# Creating Your Own Blog Using Hugo
<hr>

For this tutorial we will create our own blog site from scratch using a framework called Hugo. 

<div class="pb-3"></div>

Online platforms such as Squarespace, Wix or Wordpress are very convenient to use to customise and create your own website. Though, they can get expensive when it comes to hosting, registeration and adding premium features.
  
<div class="pb-3"></div>

Hugo is a framework where you can create your own website, completely from scratch without much effort or without knowing too much (or any) of the internal programming.
There are also many web hosting platforms that can easily host a Hugo project for free - meaning, the only money you will spend will be for the custom domain name!

<div class="pb-3"></div>

You can choose from lots of amazing free themes. Each blog post is written as a `.md` file, also known as `markdown`. Markdown can just be written as plain English with a few added symbols to symbolise where the headings are, which words are bold, or any other special formatting that may be needed.

<div class="pb-3"></div>

We will primarily be using Windows, however there are equivalent ways of doing some of the steps on a MAC. Most of the steps should be the same.

<div class="pb-3"></div>

We will go through everything from:

<div class="pb-3"></div>

* Installing Hugo
* Using a theme
* Personalising the website
* Adding content

<div class="pb-3"></div>

### **Installing Hugo**

<div class="pb-3"></div>

Create a folder where you want to store your project.

<div class="pb-3"></div>

Go into the command prompt and navigate to the folder you have created. Run `cd <path to your project folder>`. For example, I created my folder `hugo website` in the Desktop, so I would run:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
cd C:\Users\Sharl\Desktop\hugo website

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Now, we will install hugo and create a new project from scratch. In the command prompt, we will run a few commands that will install hugo and create the base of the website.

<div class="pb-3"></div>

#### **Windows**
For windows, if you use chocolatey for package management, run:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
choco install hugo -confirm

```
<!-- ----------------------------- -->

<div class="pb-3"></div>


otherwise if you use Scoop for package management, run:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
scoop install hugo

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

You can check what you are using by going into your `C:\ProgramData` folder and seeing if you either have chocolatey or scoop.

<div class="pb-3"></div>

#### **MAC**

<div class="pb-3"></div>

To install hugo using a MAC:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
brew install hugo

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

#### **Linux**

<div class="pb-3"></div>

To install hugo using Linux:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
brew install hugo

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

### **Creating a new project**

<div class="pb-3"></div>

Now that we have hugo installed, we can start our project.

<div class="pb-3"></div>

In the command prompt, run `hugo new site <name of blog here>`. For this example, we will make a blog about food, which will be called 'My Food Blog':

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
hugo new site my-food-blog

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

This will create a new folder called my-food-blog. If you open the folder, you will see that the 'skeleton' or 'base' folders have automatically been created, which should look something like this:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/createYourOwnBlogUsingHugo/1.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Root folder</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

### **Using a Theme**

<div class="pb-3"></div>

You can browse through the themes listed at <a class="cyanLink" href="https://themes.gohugo.io/">https://themes.gohugo.io/</a> 

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/createYourOwnBlogUsingHugo/2.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Themes to choose from at themes.gohugo.io</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

When I was first using hugo, I followed the <a class="cyanLink" href="https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/">Free Code Camp Hugo Tutorial</a>, and they recommend using the Ghostwriter theme if you are starting out. We will instead pick a different design.

<div class="pb-3"></div>

We will be using the Hugo-sugoi theme for now. You can read about it <a class="cyanLink" href="https://themes.gohugo.io/hugo-sugoi/">here</a>, and check out the demo <a class="cyanLink" href="https://themes.gohugo.io/theme/hugo-sugoi/">here</a>.

<div class="pb-3"></div>

Download the source code from <a class="cyanLink" href="https://github.com/aanupam23/hugo-sugoi">Github</a> (Click on the Green **Code** button, then **Download ZIP**).

<div class="pb-3"></div>

Extract the zip, and copy the `hugo-sugoi-master` into your `my-food-blog\themes` folder. 

<div class="pb-3"></div>

Don't forget to make sure that the folder has been extracted correctly. For example, make sure the theme's code is nested under `my-food-blog\themes\hugo-sugoi-master` and not `my-food-blog\themes\hugo-sugoi-master\hugo-sugoi-master`.

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/createYourOwnBlogUsingHugo/3.jpg" loading="lazy" alt="image" class="image-50"/>
	<div class="image-description"><p>Extract the folder into your Hugo project.</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Now rename the folder from `hugo-sugoi-master` to `hugo-sugoi`.

<div class="pb-3"></div>

### **Personalise your site**

<div class="pb-3"></div>

We will just make a few modifications before running the code.

<div class="pb-3"></div>

Open `my-food-blog\config.toml` and overwrite the code to this (substituting your details):

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```js
baseURL = "/"
languageCode = "en-us"
title = "Your website's name"
theme = "hugo-sugoi"

[Params]
  herotitle = "Your website's name"
  facebook = "https://facebook.com/XXX"
  twitter = "https://twitter.com/XXX"
  youtube = "https://youtube.com/XXX"
  github = "https://github.com/XXX"
  email = "XXX@example.com"

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

If you want to exclude some of the social media, you can just delete the lines that you do not need.

<div class="pb-3"></div>

The HTML files are split up into **partials**. These partials only contain the HTML code for that particular section. For example, the `header.html` will only contain the HTML code for what is in the header of your website.

<div class="pb-3"></div>

Go into `my-food-blog\themes\hugo-sugoi\layouts\partials\header.html`.

<div class="pb-3"></div>

Change:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```HTML
<label for="drop" class="toggle"><i class="fas fa-bars u-pull-right" aria-hidden="true"></i> 
	<span><i class="fas fa-fire" aria-hidden="true"></i> 
		Sugoi // Change Sugoi to your website's name (or, 'Home')
	</span>
</label> 

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Also, change:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```HTML
<li><a href="{{ .Site.BaseURL }}">
	<span><i class="fas fa-fire" aria-hidden="true"></i>
		Sugoi // Change Sugoi to your website's name (or, 'Home')
	</span>
</a></li>

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

This next part is completely optional, you can complete it if you want to add some basic social media links.

<div class="pb-3"></div>

Go into `my-food-blog\themes\hugo-sugoi\layouts\partials\hero.html`. To add some social media links at the top, you can make the following modifications:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```HTML
<div class="section hero">
	<div class="container">
		<h3 class="section-heading">{{ .Site.Params.herotitle}}</h3>
		<a class="button button-primary" href="{{ .Site.Params.herolink}}">{{ .Site.Params.herolinktext}}</a>

		// Add this code block here
		<br>
		<a class="button" style="color:rgb(112, 126, 250)" href="{{ .Site.Params.facebook}}">Facebook</a>
		<a class="button" style="color:rgb(148, 217, 238)" href="{{ .Site.Params.twitter}}">Twitter</a>
		<a class="button" style="color:rgb(253, 130, 121)" href="{{ .Site.Params.youtube}}">Youtube</a>
		<a class="button" style="color:rgb(255, 251, 250)" href="{{ .Site.Params.github}}">Github</a>
		<a class="button" style="color:rgb(132, 241, 214)" href="{{ .Site.Params.email}}">Email</a>
		// -----

	</div>
</div>

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

They will use the links that you specified in the previous `my-food-blog\config.toml` file.

<div class="pb-3"></div>

If you want to add more social media links at the bottom, you can download this <a class="cyanLink" href="./assets/blog/downloads/images.zip">zip file</a> and copy the contents into `my-food-blog\static\images`.  

<div class="pb-3"></div>

Go into `my-food-blog\themes\hugo-sugoi\layouts\partials\footer.html` and copy and paste the social media links you want:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```HTML
<footer>
	// ------------------------------------ Add social media links
	<!-- Facebook -->
	<a href="{{ .Site.Params.facebook}}"><img style="width: 30px" src="/images/facebook.png" alt="icon"></a> 
	<span style="padding:15px">

	<!-- Youtube -->
	<a href="{{ .Site.Params.youtube}}"><img style="width: 30px" src="/images/youtube.png" alt="icon"></a> 
	<span style="padding:15px">

	<!-- Twitter -->
	<a href="{{ .Site.Params.twitter}}"><img style="width: 30px" src="/images/twitter.png" alt="icon"></a> 
	<span style="padding:15px">
			
	<!-- Github -->
	<a href="{{ .Site.Params.github}}"><img style="width: 30px" src="/images/github.png" alt="icon"></a> 
	<span style="padding:15px">

	<!-- Email -->
	<a href="{{ .Site.Params.email}}"><img style="width: 30px" src="/images/gmail.png" alt="icon"></a> 
	// ------------------------------------

	<br>
	<span class="copyright">
			{{ with .Site.Copyright | default "&copy;" }} {{ . | safeHTML }} {{ now.Format "2006"}} {{ end }}
			<a href="https://github.com/aanupam23/hugo-sugoi" title="hugo-sugoi" alt="hugo-sugoi" target="_blank">Hugo-Sugoi</a>
	</span>
</footer>

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

### **Add some content**

<div class="pb-3"></div>

Try running your site. Navigate to the root directory (`my-food-blog`) of any terminal or command line, and run:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
hugo serve

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Now go into `http://localhost:1313/` in one of your browsers. 

<div class="pb-3"></div>

Your website should look like it has the general theme applied. However, the website will be empty! There are no posts, so we will need to add in some content. Each post is going to be written in a separate markdown file.
For example, if you wanted to write something on Chocolate Lava Cakes, you would have a file called `ChocolateLavaCake.md` where you would write your text.

<div class="pb-3"></div>

The hugo-sugoi theme comes with some examples. Navigate to `my-food-blog\themes\hugo-sugoi\exampleSite`. There you will see a folder called `content`.

<div class="pb-3"></div>

Copy this `content` folder and paste it into the `my-food-blog` folder, where the root of the project is (overwrite the existing one). 

<div class="pb-3"></div>

Run the program again:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
hugo serve

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Now you have some content!

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
	<img src="./assets/blog/images/createYourOwnBlogUsingHugo/4.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Hugo site with content</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Go into `my-food-blog\content\post` and observe the 4 markdown files that represent the 4 posts:

<div class="pb-3"></div>

-  air-nation-list-style.md
-  code-blocks.md
-  prince-zuko.md
-  water-nation-pride-and-peace.md

<div class="pb-3"></div>

You can open any one of them to see the format of how you need to write your posts in Markdown.

<div class="pb-3"></div>

In a Markdown file, you can just write the content as plain English - like you would on Microsoft Word - except you can use symbols to signify headings or special styling in your text. <a class="cyanLink" href="/blog/markdown" target="_blank">Here are some examples</a>.

<div class="pb-3"></div>

There are a few places where you can read some of the syntax used for markdown:

<div class="pb-3"></div>

* <a class="cyanLink" href="https://www.markdownguide.org/basic-syntax/">Markdown Basic Syntax</a>
* <a class="cyanLink" href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheat Sheet</a>

<div class="pb-3"></div>

Now everytime you want to start a new post, all you have to do is write it in a new `Markdown` file, inside the `content/post` folder! 

<div class="pb-3"></div>

You can view the final source code on <a class="cyanLink" href="https://github.com/vondreii/hugo-framework">Github</a>.

<div class="pb-3"></div>

### **Resources**

<div class="pb-3"></div>

* <a class="cyanLink" href="https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/">Your First Hugo Blog: A Practical Guide</a>
* <a class="cyanLink" href="https://gohugo.io/getting-started/installing/">Installing Hugo</a>

<div class="pb-3"></div>