from django.db import models


class ResearchArchive(models.Model):
    Title = models.CharField(max_length=500, default=None)
    TitleID = models.CharField(max_length=150, default=None)
    Link = models.CharField(max_length=150, default=None)
    PubYear = models.IntegerField(default=None)
    DateAdded = models.CharField(max_length=150, default=None)
    Category = models.CharField(max_length=150, default=None)
    UserID = models.CharField(max_length=150, default=None)

    Abstract = models.TextField(null=True, default=None)
    Author = models.CharField(max_length=500, default=None, null=True)
    Citations = models.IntegerField(default=None, null=True)
