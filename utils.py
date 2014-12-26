# -*- coding: utf-8 -*-

from random import choice


def get_random_line(filename):
    """
    Return a random line from the file
    """

    with open(filename, 'r') as f:
        return choice(f.readlines())

class Parser(object):
    """
    Parse articles file
    The file should look like that:
        
    ArticleName1
    link1
    link2
    
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

                if line:
                    if not article:
                        article = line
                    else: 
                        urls.append(line)
                    continue
                
                if not article: 
                    continue

                yield dict(article=article, urls=urls)
                
                article = ''
                urls = []


if __name__ == '__main__':
    for x in Parser().parse_file('articles.txt'):
        print x

