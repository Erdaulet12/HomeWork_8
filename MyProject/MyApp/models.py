from django.db import models
import json


# Create your models here.

class MyModel(models.Model):
	name = models.CharField(max_length=100)
	items = models.TextField(default="[]")

	def set_items(self, items_list):
		self.items = json.dumps(items_list)

	def get_items(self):
		return json.loads(self.items)
