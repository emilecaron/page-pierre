# -*- coding: utf-8 -*-

from random import choice

class Parser(object):

    """
    Parse articles file
    The file should look like that:
        
    ArticleName1
    link1
    link2 | rand2
    
    ArticleName2
    link1
    link2

    """

    def parse_file(self, filename):
        '''
        Yield article_data dicts
        '''
        
        with open(filename, 'r') as f:
            article = None
            urls = []

            for line in f.readlines() + ['']:
                line = line.strip()

                if line.startswith('#'):
                    continue

                if line:
                    if not article:
                        article = line
                    else: 
                        url = choice(line.split('|'))
                        urls.append(url.strip())
                    continue
                
                if not article: 
                    continue

                yield dict(article=article, urls=urls)
                
                article = ''
                urls = []


if __name__ == '__main__':
    for x in Parser().parse_file('articles.txt'):
        print x

