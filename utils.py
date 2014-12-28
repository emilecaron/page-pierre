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
    def __init__(self, filename):
        self.articles = self.parse_file(filename)

    def get_index_articles(self):
        '''
        get all articles with only urls that begin with * 
        '''
        for art in self.articles:
            index_urls = [url[1:] for url in art['urls'] if url.startswith('*')] 

            # Set default images for articles that don't have any
            index_urls = index_urls or list('static/just_grey.jpg')

            art.update(dict(urls=index_urls))

            print(art)
            yield art

    def get_article(self, aid):
        '''
        Get one article selected by id
        '''
        for art in self.articles:
            if art['aid'] == aid:
                art['urls'] = [u.replace('*','') for u in art['urls']]
                return art

    def parse_file(self, filename):
        '''
        Yield article_data dicts
        '''
        _id = 0 
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

                yield dict(article=article, urls=urls, aid=_id)

                _id += 1
                article = ''
                urls = []


if __name__ == '__main__':
    for x in Parser().parse_file('articles.txt'):
        print x

