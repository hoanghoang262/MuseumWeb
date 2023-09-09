CREATE TABLE [dbo].[Role](
	[role_id] [int] IDENTITY(1,1) PRIMARY KEY,
	[role_name] [nvarchar](100) NOT NULL,
)

CREATE TABLE [dbo].[Tag](
	[tag_id] [int] IDENTITY(1,1) PRIMARY KEY,
	[tag_name] [nvarchar](100) NOT NULL,
)

CREATE TABLE [dbo].[Category](
	[category_id] [int] IDENTITY(1,1) PRIMARY KEY,
	[category_name] [nvarchar](100) NOT NULL,
)

CREATE TABLE [dbo].[Account](
	[account_id] [varchar](225) PRIMARY KEY,
	[email] [varchar](225) NOT NULL,
	[account_name] [nvarchar](225) NOT NULL,
	[hash_password] [text] NULL,
	[isBan] [bit] default 0,
	[role_id] [int] default 3 FOREIGN KEY REFERENCES Role(role_id),
	[created_date] [date] default getdate(),
)

CREATE TABLE [dbo].[Product](
	[product_id] [varchar](225) PRIMARY KEY,
	[product_json] [nvarchar](max) NOT NULL CHECK(ISJSON(product_json) = 1),
	[image] [text] NULL,
	[video] [text] NULL,
	[created_date] [date] default getdate(),
	[created_by] [varchar](225) FOREIGN KEY REFERENCES Account(account_id),
)

CREATE TABLE [dbo].[Post](
	[post_id] [varchar](225) PRIMARY KEY,
	[image] [text] NULL,
	[post_json] [nvarchar](max) NOT NULL CHECK(ISJSON(post_json)=1),
	[category_id] [int] FOREIGN KEY REFERENCES Category(category_id),
	[created_date] [date] default getdate(),
	[created_by] [varchar](225) FOREIGN KEY REFERENCES Account(account_id),
)

CREATE TABLE [dbo].[Comment](
	[comment_id] [varchar](225) PRIMARY KEY,
	[content] [ntext] NOT NULL,
	[account_id] [varchar](225) NULL,
	[post_id] [varchar](225) FOREIGN KEY REFERENCES Post(post_id),
	[created_date] [date] default getdate(),
	[created_by] [varchar](225) FOREIGN KEY REFERENCES Account(account_id),
)

CREATE TABLE [dbo].[Favor](
	[account_id] [varchar](225) FOREIGN KEY REFERENCES Account(account_id),
	[product_id] [varchar](225) FOREIGN KEY REFERENCES Product(product_id)
)

CREATE TABLE [dbo].[Product_Tag](
	[product_id] [varchar](225) FOREIGN KEY REFERENCES Product(product_id),
	[tag_id] [int] FOREIGN KEY REFERENCES Tag(tag_id)
)
