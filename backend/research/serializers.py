from rest_framework import serializers
from .models import ResearchArchive


class ResearchArchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchArchive
        fields = ['Title', 'Link', 'PubYear', 'TitleID', 'UserID',
                  'DateAdded', 'Category', 'Abstract', 'Author', 'Citations']
