from setuptools import setup


setup(  name='HoloServe',
        version='0.1',
        description='Libraries for process management, pipelineing, and other goodies.',
        url='https://github.com/quantumdot/ThackTech',
        author='Joshua K. Thackray',
        author_email='thackray@rutgers.edu',
        license='MIT',
        install_requires=[
            'gevent',
            'flask',
            
        ],
        scripts=[
        ],
        zip_safe=False)