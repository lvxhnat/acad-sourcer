from django.urls import path
from . import views

app_name = 'research'

urlpatterns = [
    path('research/', views.search_articles, name="search_articles"),
    path('researcharchive/', views.retrieve_research_archive,
         name="articles_archive"),
    path('researchlibgen/', views.get_libgen_download_link, name="libgenlink"),
    path('researchgscholar/', views.get_gscholar_info, name="gscholarinfo")
]
