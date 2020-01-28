Lets say I want to create a Django project called headforcode with the following "apps"

- Courses
- Resources

I already have Python installed and I can check for this using:

```python --version``` (using the verbose)

I see ```3.8.1``` in return

Next I check what version of Pip I am using:

```python -m pip --version```

```pip 19.3.1 from C:\Users\nick.h.lewis\AppData\Local\Programs\Python\Python38-32\lib\site-packages\pip (python 3.8)```

Shows me the answer to that question.

Next I want to initiate the project and I am going by the instructions at the site [Django for beginners](https://djangoforbeginners.com/initial-setup/)

The steps below are stripped of the main content of the above, as a quick guide to getting stuff up and running. Plus adapted to my specific needs.

## Install Django and getting up and running

```bash
cd ~/proj
mkdir headforcode
cd headforcode
pipenv install django==3.0.2
pipenv shell
django-admin startproject courses .
ls
```

You will see 
- courses
- manage.py
- Pipfile
- Pipfile.lock

```code .```

To launch VSC and let's check the site works thus far:

```python manage.py runserver```

Which it does, good stuff

Can exit the server with CTRL-C as ever

Can Exit the pipenv shell at any time by typing ```exit``` and then starting it again using ```pipenv shell```

Now let's add Git to the mix :-)

```git init```

We shall push it to Github later on once a few other things have been carried out...

Next run the migrations, as runserver is complaining about them currently. Let's start the shell again first:

```pipenv shell```

```
python manage.py migrate
```
```
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying sessions.0001_initial... OK
```

```python manage.py runserver```

Now shows none of the migration errors, it is clean

Let's create a second app which I am not sure why at this stage, I am following this thing through and this may make sense later.

```python manage.py startapp pages```

NOTE: No full stop on the end this time

Next I change my courses/settings.py file:

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'pages.apps.PagesConfig', # new
]
```

Next I change my ```pages/views.py```

```python
# pages/views.py
from django.http import HttpResponse


def homePageView(request):
    return HttpResponse('Hello, World!')
```

Create a ```$ touch pages/urls.py```

Paste into this:

```py
# pages/urls.py
from django.urls import path

from .views import homePageView

urlpatterns = [
    path('', homePageView, name='home')
]
```

Last step is to update ```courses/urls.py``` as follows:

```py
# helloworld_project/urls.py
from django.contrib import admin
from django.urls import path, include # new

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.urls')), # new
]
```

Now we can see if it all works still!!!

```
python manage.py runserver
```

Glad to say that it does at this stage :-)

Earlier I initiated git with ```git init``` and now we should check the status of this

```git status```

NOTE: Looks like I should have run git init whilst logged into the virtualenv shell, I had to run init again...

Status shows that everything is untracked at this stage, so we need to address that.

```
git add -A
git commit -m "initial commit"
```

NOTE: I will save the whole github step until later but now we've got things covered locally at least. Will return to the [steps covered](https://djangoforbeginners.com/hello-world/) later

Next I move on to working with Templates and I will tidy this document up later by adding headings for better clarity rather than some monolithic thing!

Create the directory structure under the existing pages directory as follows:

```templates/pages/home.html```

Now to update ```courses/settings.py```

```python
# pages_project/settings.py
TEMPLATES = [
    {
        ...
        'DIRS': [os.path.join(BASE_DIR, 'templates')], # new
        ...
    },
]
```

Next update the new ```home.html``` file as follows:

```
<!-- templates/home.html -->
<h1>Homepage</h1>
```

Next update ```pages/views.py```

```
# pages/views.py
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'home.html'
```

Next ```courses/urls.py```

```
# pages_project/urls.py
from django.contrib import admin
from django.urls import path, include # new

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.urls')), # new
]
```

Next ```pages/urls.py```

```
# pages/urls.py
from django.urls import path

from .views import HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
]
```

Now run it

```python manage.py runserver```

What do we see?

An error :-)

```template does not exist home.html```

So what I ahve done is to copy the home.html up to the templates folder from pages. I then renamed theheading to heading 2 and I can now see this without error.

either I misread the docs earlier or there is another issue but not to worry it works!

Let's break for lunch.






















