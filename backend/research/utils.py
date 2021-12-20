import re
import ast
import asyncio
import itertools
import pandas as pd
from aiohttp import ClientSession


async def fetch_html(url: str, session: ClientSession) -> tuple:
    headers = {
        "Authorization": "UUID 859b5333-89b3-420d-b80c-52fff0a5d861",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36"
    }

    try:
        async with session.get(url, headers=headers, verify_ssl=False) as response:
            try:
                res = await response.text()
                return res
            except Exception as e:
                print(e)

    except Exception as e:
        return None


async def make_requests(urls: set) -> None:
    async with ClientSession() as session:
        tasks = []
        for url in urls:
            tasks.append(
                fetch_html(url=url, session=session)
            )
        results = await asyncio.gather(*tasks)
    return results


def generate_urls(num_articles: int, search_query: str, start: int = 2000, end: int = 2021, _document_type: str = "article", category: str = ""):
    urls = []
    search_query = "+".join(search_query.split(" "))
    for i in range(0, int(num_articles) + 1, 10):
        urls.append(
            f"https://backend.constellate.org/search2/items/?keyword={search_query}&provider=&start={start}&end={end}&publication_title=&language=English&doc_type={_document_type}&category={category}&full_text=false&publisher=&jstor_discipline=&from={str(i)}")
    return urls


def try_map(x, key):
    try:
        return str(x[key]).replace("'", "").replace('"', "")
    except Exception as e:
        return ""


def clean_category(string):
    if not string or "[" not in string:
        return string
    else:
        try:
            return re.findall("label: (.*?)}", string)
        except:
            return None
