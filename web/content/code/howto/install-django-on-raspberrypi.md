first up connect to the pi by ssh from the ipad pro running Blink TErminal app
do a ls to check the folder I decided to cd into Documents
then made a new directory mkdir DjangoServer
We dont have Pipenv, so

pip install pipenv

great but pipenv doesn;t seem to work, I had to close my ssh connection and reconnect

Next

pipenv install Django==3.0

Fine, bwell not quite as my Raspberry pi is running on Python 2.7 which has now been deprecated and we need Python 3.x

WHat are the options??

pipenv --python 3.7 install --dev

This forces the virtualenv to be created with Python 3 at its heart

Now we can try isntalling Dajngo agaon

next pipenv shell

check the pyhton version

python --version

Cool now shows 3.7.x

we can just run python withour worrying about the two

now to install a site project

$ django-admin startproject test_project .

$ python manage.py runserver

this runs the server, so in theory I should be able to see it via

http://raspberry.local:8000

Not quite it didnt work and this may be because some configuration is needed at the Raspberry Pi end

http://www.oneclicksimplify.com/jessie.html

