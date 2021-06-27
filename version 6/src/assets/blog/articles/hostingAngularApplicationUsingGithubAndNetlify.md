#### 30 Aug 2020
# Hosting An Angular Application Using Github And Netlify
___

For this tutorial, you will need a working Angular App ready to host, and a Github Account already set up. If you don't have an Angular App, you can download some template source code of a working simple Angular App from <a class="cyanLink" href="https://github.com/vondreii/project-template">here</a>.

<div class="pb-3"></div>

### **Github with Netlify**

<div class="pb-3"></div>

Netlify is a free hosting platform where you can host your website live using a customisable domain name provided with a .netlify.app extension at the end (you can also link your own custom domain if you'd like).
One way Netlify does this is by connecting to an existing repository and hosting your website code stored there.

<div class="pb-3"></div>

In this tutorial we will go through how to host an Angular web application using Netlify in 4 steps:

<div class="pb-3"></div>

* Adding your Angular code to your repository
* Creating a Netlify account 
* Linking Netlify to your Github repository
* Changing any additional configurations to host the website successfully

<div class="pb-3"></div>

### **1. Adding your Angular code to your repository**

<div class="pb-3"></div>

If you do not yet have a local copy of the Github repository, navigate to your repository on GiHub. Clone the repository so you have a local copy to your computer.

<div class="pb-3"></div>

Click on the **Code** link, and copy the link under **Clone with HTTPS**.

<div class="pb-3"></div>

Open your command prompt. Navigate to any location, for example, the **Desktop**:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```Bash
cd Desktop

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Then, run the command: `git clone <<put-the-link-here>>`. For example, my link was `https://github.com/vondreii/project-template.git`, so I would write:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```Bash
git clone https://github.com/vondreii/project-template.git

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

This should automatically create a new folder locally on your computer, which will be linked to your online repository.
In this example, my repository is called `My-Angular-App-Netlify`, so the new folder that was created in my Desktop was also called `My-Angular-App-Netlify`.

<div class="pb-3"></div>

You want to add the code to your Angular Website into this folder, ensuring that the root of the angular application contains your `e2e`, `node_modules` and `src` folders.

<div class="pb-3"></div>

Now run the following commands to push the code to your remote repository:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```Bash
git add .

```

```Bash
git commit -m "Added Angular Code"

```

```Bash
git push

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

If you already have a repository that stores your Angular code, just ensure that the correct folders and files make up the root folder as shown in the previous image. 

<div class="pb-3"></div>

Once you have pushed your code, go to your repository on your Github page. You should be able to see that your repository has now updated with the code to your Angular website.

<div class="pb-3"></div>

### **2. Creating a Netlify Account**
	
<div class="pb-3"></div>

Now that we have a Github repository storing the code online, we can create a Netlify Account. This will be used to host the actual website.

<div class="pb-3"></div>

Go to Netlify's <a class="cyanLink" href="https://www.netlify.com/">home page</a> and click on Sign up.

<div class="pb-3"></div>

You will be given a few different options to choose from of where you want to link Netlify to. Since we are going to be using Gihub, select Github.

<div class="pb-3"></div>

You will be asked to sign in to your Github account using your username and password. Once You select **Sign in**, you will be asked to Authorize Netlify.

<div class="pb-3"></div>

Select **Authorize netlify.**

<div class="pb-3"></div>

Now you have your Netlify account setup! You should be able to see your main dashboard and a quick start guide pop-up. You can either read through or exit the quick start guide.

<div class="pb-3"></div>

### **3. Linking a Netlify Project to your Github repository**

<div class="pb-3"></div>

Once way that Netlify hosts your website is by connecting to a Github repository that stores the code of your website. We already have a Github repository that stores your website's code. 
All we have to do now is link that Github repository with Netlify, so Netlify will be able to host it.
That way your website can display using a domain like <a class="cyanLink" href="http://angular-project.netlify.app">http://angular-project.netlify.app</a>.

<div class="pb-3"></div>

Select **New Site From Git:**.

<div class="pb-3"></div>

On the next page, under **Continuous Deployment**, select **Github**.

<div class="pb-3"></div>

Following that, you will be asked to grant permission to Netlify. Select **Authorize Netlify**.

<div class="pb-3"></div>

You will then be asked to install Netlify. Here, you are not installing anything on your local computer. You are 'installing' or connecting your Netlify account to be associated with your Github account.
You can either choose:

<div class="pb-3"></div>

* **All repositories:** Netlify will have access to all repositories that you will have on your account. 
* **Select repositories:** You are only giving Netlify permission to certain repositories of your choice.

<div class="pb-3"></div>

In this case, it does not really matter which option you choose as the end result will be the same. For this tutorial we will choose to give Netlify access only to the repository we want to host:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/1.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Select repositories you will allow Netlify access to</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

A list of Github repositories will appear and you can now select the one you want to host.
Select the repository where you have stored your Angular code:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/2.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Select the repository you want to host</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Now you will be presented with a page asking for some information about the deployment of the website:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/3.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Fill in basic details</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Keep the **Owner** and **Branch to deploy** fields at the default value (unless you specifically need to change them).
For the **Basic Build Settings** fields:

<div class="pb-3"></div>

**Build command:** Type in `ng build`. If you are going to be deploying to production, use `ng build --prod`. (This can be changed later if needed).

<div class="pb-3"></div>

**Publish directory:** Leave this blank for now, we will fill it in later when we have the information.

<div class="pb-3"></div>

Finally select **Deploy site.**

<div class="pb-3"></div>

Now you have linked your github repository to your Netlify account! You will be redirected to a page that you can use to manage or control your site's deployment settings. Netlify randomly generates a domain name, such as the one below. However, we will change this later via the settings.

<div class="pb-3"></div>

Netlify will automatically attempt to build and host your code. However your site will fail and there will still be errors if you try to deploy at this stage.
You will need to still complete some extra configurations in order for hosting to work properly. 

<div class="pb-3"></div>

### **4. Changing any additional configurations to host the site successfully**

<div class="pb-3"></div>

#### **Adding the _redirects file**

<div class="pb-3"></div>

Go back to your application's directory (`AngularApp > src`).

<div class="pb-3"></div>

First you will need to add a _redirects file here (no extension in the filename). Without it, you will get a screen showing an error if you try to navigate or refresh your pages.

<div class="pb-3"></div>

If you want, you can download a completed _redirects file from <a class="cyanLink" href="./assets/blog/downloads/redirects.zip">here</a>.
Unzip the folder and copy the _redirects file into your `AngularApp > src` folder.

<div class="pb-3"></div>

Otherwise, you can create the file manually. 
Create a new file called `_redirects` (without an extension) in `AngularApp > src` (as shown above). 

<div class="pb-3"></div>

Add the following code into the file: 

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```Bash
/*    /index.html    200

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Then in your `angular.json` file, under `projects/project-name/architect/build/options/assets`, add the following code:

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```js
{
    "assets": [
        "src/favicon.ico",
        "src/assets",
        {                       // add this line
        "glob": "_redirects",   // add this line
        "input": "src",         // add this line
        "output": "/"           // add this line
        }                       // add this line
    ]
}

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

#### **Build/Compile your project**

<div class="pb-3"></div>

You need to build/compile your angular project. Run the following command in your `AngularApp` directory. 

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```Bash
ng build

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Once the code finishes building, a dist folder will be created in the root of your application. This is the build folder that Netlify will use during hosting.

<div class="pb-3"></div>

Now open the `.gitignore` file. The top part of the file should look like this: 

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```bash
# See http://help.github.com/ignore-files/ for more about ignoring files.

# compiled output
/dist
/tmp
/out-tsc
# Only exists if Bazel was run
/bazel-out

# dependencies
/node_modules

...

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

Completely delete the line `/dist`.

<div class="pb-3"></div>

This is because when you push your changes to the remote repository, git will be ignoring your `/dist` folder and will therefore not include it.

<div class="pb-3"></div>

Now we can push the changes we made to the github repository.

<div class="pb-3"></div>

<!-- ----------- Code ----------- -->
```Bash
git add .

```

```Bash
git commit -m "Added redirects, updated gitignore and compiled the project"

```

```Bash
git push

```
<!-- ----------------------------- -->

<div class="pb-3"></div>

If you go to your remote repository you will see that your `dist/{project-name}` is now stored:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/4.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>dist/{project-name} stored remotely on Github</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

It is important that you have your `dist/{project-name}` folder here because Netlify will use this to host your website.
Here, you can see that mine is `dist/test-angular-app`.

<div class="pb-3"></div>

#### Configure your Build settings

<div class="pb-3"></div>

Finally, go back to your site's page on Netlify and click on the **Deploy settings** for your site.

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/5.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>dist/{project-name} stored remotely on Github</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

On the left column, select **Build and Deploy**. Then on the right, select **Edit Settings.**

<div class="pb-3"></div>

Edit the **Publish directory** field, which we left blank previously. Here, this is where you put your `dist/{project-name}` from before. (This is the dist folder that shows in your Github remote repository).
For example, mine was `dist/test-angular-app`:

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/6.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Change the Publish Directory</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

Press save.

<div class="pb-3"></div>

#### **Change your domain name**

<div class="pb-3"></div>

If you want to change the domain name to something that is not automaticaly generated, go back to the **Deploy settings.**

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->
<div class="image-container">
    <img src="./assets/blog/images/hostingAngularApplicationUsingGithubAndNetlify/5.jpg" loading="lazy" alt="image" class="image-full"/>
	<div class="image-description"><p>Deploy settings</p></div>
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

On the Sidebar, click on **Domain Management**, then **options**, next to the default domain name.

<div class="pb-3"></div>

Type in your new domain.

<div class="pb-3"></div>

Because this will be a free domain, Netlify will add a `.netlify.app` extension at the end. If you do not want this you will need to purchase or acquire another domain and add this to Netlify to use instead.

<div class="pb-3"></div>

#### **Run, Test and Deploy your website**

<div class="pb-3"></div>

Go back to your site's page on Netlify. Netlify should automatically attempt to deploy your site again. If not, you can select the **Trigger Deploy** option.

<div class="pb-3"></div>

Wait for a while until your site finishes deploying.

<div class="pb-3"></div>

Go into the search bar and type your new domain name, for example <a class="cyanLink" href="http://another-domain.netlify.app">http://another-domain.netlify.app</a> and you should now be able to see your website up and running.
 
<div class="pb-3"></div>

### **Key Points**

<div class="pb-3"></div>

If you want to make changes to your website, all you have to do is edit your Angular app code in your local repository, and run `git add .`, `git commit -m "type message here"`, and `git push` to save it to your remote Github repository.

<div class="pb-3"></div>

Everytime you `git push`, Netlify will automatically trigger an attempt to re-deploy your code including the new changes.

<div class="pb-3"></div>

### **Resources**

<div class="pb-3"></div>

* <a class="cyanLink" href="https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-angular/">First Steps Using Netlify & Angular</a>
* <a class="cyanLink" href="https://scotch.io/tutorials/deploying-an-angular-app-to-netlify">Deploying an Angular App to Netlify</a>

<div class="pb-3"></div>