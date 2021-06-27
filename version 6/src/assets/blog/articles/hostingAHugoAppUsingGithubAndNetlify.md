#### 4 Jan 2021
# Hosting a Hugo Application Using Github and Netlify
___

### **Prerequisites**

<div class="pb-3"></div>

You will need:

<div class="pb-3"></div>

- A Hugo App ready to host.
- A Github Account set up.
- A repository on your GitHub account where you store your Hugo project.

<div class="pb-3"></div>

If you don't have a Hugo App, you can download the source code of a working simple Hugo App from <a class="cyanLink" href="https://github.com/vondreii/hugo-framework">here</a>.

<div class="pb-3"></div>

### **Hugo Framework hosted using Netlify**

<div class="pb-3"></div>

Netlify is a free hosting platform where you can host your website live for free. One way it can do this is by linking to an existing Github repository and hosting your code stored there. If you have a Hugo App stored on a repository, you can use Netlify to host it. All you have to do is buy your own custom domain name and link it to Netlify. Otherwise, Netlify will give you a default extension with a .netlify.app at the end of your website name.

<div class="pb-3"></div>

### **1. Creating a Netlify Account**

<div class="pb-3"></div>

Go to Netlify's <a class="cyanLink" href="https://www.netlify.com/">home page</a> and click on Sign up.

<div class="pb-3"></div>

You will be given a few different options to choose from of where you want to link Netlify to. Since we are going to be using Gihub, select Github.

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/1.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Sign up to Netlify using GitHub</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

You will be asked to sign in to your Github account using your username and password. Once You select **Sign in**, you will be asked to Authorize Netlify.

<div class="pb-3"></div>

Select **Authorize netlify.**

<div class="pb-3"></div>

Now you have your Netlify account setup! You should be able to see your main dashboard and a quick start guide pop-up. You can either read through or exit the quick start guide.

<div class="pb-3"></div>

### **2. Linking a Netlify Project to your Github repository**

<div class="pb-3"></div>

Once way that Netlify hosts your website is by connecting to a Github repository that stores the code of your website. All we have to do for this step is to link Netlify with your Github repository.

<div class="pb-3"></div>

Select **New Site From Git:**

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/2.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Select New site from Git</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

On the next page, under **Continuous Deployment**, select **Github**.

<div class="pb-3"></div>

Following that, you will be asked to grant permission to Netlify. Select **Authorize Netlify**.

<div class="pb-3"></div>

You will then be asked to install Netlify. Here, you are not installing anything on your local computer. You are 'installing' or connecting your Netlify account to be associated with your Github account.

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/3.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Select repositories you will allow Netlify access to</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

You can either choose:

<div class="pb-3"></div>

* **All repositories:** Netlify will have access to all repositories that you will have on your account. 
* **Select repositories:** You are only giving Netlify permission to certain repositories of your choice.

<div class="pb-3"></div>

In this case, it does not really matter which option you choose as the end result will be the same. 

<div class="pb-3"></div>

You can just select the hugo repository to only give Netlify access to this one repository for now, and change it later.  

<div class="pb-3"></div>

Select **Install**.

<div class="pb-3"></div>

Now select the repository that you want to host (in this case, the repository where your Hugo code is stored).

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/4.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Select the repository you want to host</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Now you will be presented with a page asking for some information about the deployment of the website:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/5.jpg" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Fill in basic details</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Keep the **Owner** and **Branch to deploy** fields at the default value (unless you specifically need to change them).

<div class="pb-3"></div>

For Basic the Build Setting fields:

<div class="pb-3"></div>

**Build command:** Type in `hugo`.

<div class="pb-3"></div>

**Publish directory:** Type in `public`.

<div class="pb-3"></div>

Finally select **Deploy site.**

<div class="pb-3"></div>

Now you have linked your github repository to your Netlify account! You will be redirected to a page that you can use to manage or control your site's deployment settings. 

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/6.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Site deployed</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Netlify will automatically attempt to build the code. In a few minutes, the code should be hosted and running at a default domain name that was automatically assigned to you. For example, the one above: <a class="cyanLink" href="https://lucid-torvalds-911eb6.netlify.app">https://lucid-torvalds-911eb6.netlify.app</a>.

<div class="pb-3"></div>

### **Change your Domain Name**

<div class="pb-3"></div>

No one wants a domain name like <a class="cyanLink" href="https://lucid-torvalds-911eb6.netlify.app">https://lucid-torvalds-911eb6.netlify.app</a>.

<div class="pb-3"></div>

Click on **Site Settings**.

<div class="pb-3"></div>

In the side bar, click on **Domain Management**.

<div class="pb-3"></div>

Here you have two options:

<div class="pb-3"></div>

1. You can click on **Options** to change the name of your site from lucid-torvalds-911eb6 to something more readable. However with this you still must keep the `.netlify.app` extension.
2. **Add custom domain** allows you to link a domain that you already bought. 

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAHugoAppUsingGithubAndNetlify/7.PNG" loading="lazy" alt="image" class="image-75"/>
	<div class="image-description"><p>Change domain name</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

If you choose to add your custom domain name, you will then have to verify it and follow the prompt to add your hosting details.

<div class="pb-3"></div>

### **Resources**

<div class="pb-3"></div>

* <a class="cyanLink" href="https://www.freecodecamp.org/news/your-first-hugo-blog-a-practical-guide/">How to Create Your First Hugo Blog: a Practical Guide</a>.
* <a class="cyanLink" href="https://gohugo.io/getting-started/installing/">Installing Hugo</a>.

<div class="pb-3"></div>