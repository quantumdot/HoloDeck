from setuptools import setup


setup(  name='HoloServe',
        version='0.1',
        description='HoloDeck Server',
        url='https://github.com/quantumdot/ThackTech',
        author='Joshua K. Thackray',
        author_email='thackray@rutgers.edu',
        license='MIT',
        install_requires=[
            'gevent',
            'gevent-websocket',
            'flask',
            'flask-sockets',
            'flask-cors',
            'omxplayer',
            #'google-api-python-client',
            'youtube-dl',
            'pafy'
        ],
        scripts=[
        ],
        zip_safe=False)