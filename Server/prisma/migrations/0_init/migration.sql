BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Account] (
    [account_id] VARCHAR(225) NOT NULL,
    [email] VARCHAR(225) NOT NULL,
    [account_name] NVARCHAR(225) NOT NULL,
    [hash_password] NVARCHAR(max),
    [isBan] BIT CONSTRAINT [DF__Account__isBan__4F7CD00D] DEFAULT 0,
    [role_id] INT CONSTRAINT [DF__Account__role_id__5070F446] DEFAULT 3,
    [created_date] DATE CONSTRAINT [DF__Account__created__52593CB8] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Account__46A222CD7D22773E] PRIMARY KEY CLUSTERED ([account_id])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [category_id] INT NOT NULL IDENTITY(1,1),
    [category_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Category__D54EE9B4963B6985] PRIMARY KEY CLUSTERED ([category_id])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [comment_id] VARCHAR(225) NOT NULL,
    [content] NTEXT NOT NULL,
    [account_id] VARCHAR(225),
    [post_id] VARCHAR(225),
    [created_date] DATE CONSTRAINT [DF__Comment__created__60A75C0F] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Comment__E7957687D31E1831] PRIMARY KEY CLUSTERED ([comment_id])
);

-- CreateTable
CREATE TABLE [dbo].[Favor] (
    [account_id] VARCHAR(225) NOT NULL,
    [product_id] VARCHAR(225) NOT NULL,
    CONSTRAINT [PK_Favor] PRIMARY KEY CLUSTERED ([account_id],[product_id])
);

-- CreateTable
CREATE TABLE [dbo].[Post] (
    [post_id] VARCHAR(225) NOT NULL,
    [image] VARCHAR(max),
    [post_json] NVARCHAR(max) NOT NULL,
    [category_id] INT,
    [created_date] DATE CONSTRAINT [DF__Post__created_da__5BE2A6F2] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Post__3ED787665FB98624] PRIMARY KEY CLUSTERED ([post_id])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [product_id] VARCHAR(225) NOT NULL,
    [product_json] NVARCHAR(max) NOT NULL,
    [image] VARCHAR(max),
    [video] VARCHAR(max),
    [created_date] DATE CONSTRAINT [DF__Product__created__5629CD9C] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Product__47027DF531E031A0] PRIMARY KEY CLUSTERED ([product_id])
);

-- CreateTable
CREATE TABLE [dbo].[Product_Tag] (
    [product_id] VARCHAR(225) NOT NULL,
    [tag_id] INT NOT NULL,
    CONSTRAINT [PK_Product_Tag] PRIMARY KEY CLUSTERED ([product_id],[tag_id])
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [role_id] INT NOT NULL IDENTITY(1,1),
    [role_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Role__760965CC91AE4F6C] PRIMARY KEY CLUSTERED ([role_id])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagr__C2B05B610464EF42] PRIMARY KEY CLUSTERED ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE NONCLUSTERED ([principal_id],[name])
);

-- CreateTable
CREATE TABLE [dbo].[Tag] (
    [tag_id] INT NOT NULL IDENTITY(1,1),
    [tag_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Tag__4296A2B68B8DF4BE] PRIMARY KEY CLUSTERED ([tag_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [FK__Account__role_id__5165187F] FOREIGN KEY ([role_id]) REFERENCES [dbo].[Role]([role_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK__Comment__created__619B8048] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK__Comment__post_id__5FB337D6] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Post]([post_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK_Comment_Account] FOREIGN KEY ([account_id]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Favor] ADD CONSTRAINT [FK__Favor__account_i__6383C8BA] FOREIGN KEY ([account_id]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Favor] ADD CONSTRAINT [FK__Favor__product_i__6477ECF3] FOREIGN KEY ([product_id]) REFERENCES [dbo].[Product]([product_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__category_i__5AEE82B9] FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__created_by__5CD6CB2B] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [FK__Product__created__571DF1D5] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product_Tag] ADD CONSTRAINT [FK__Product_T__produ__66603565] FOREIGN KEY ([product_id]) REFERENCES [dbo].[Product]([product_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product_Tag] ADD CONSTRAINT [FK__Product_T__tag_i__6754599E] FOREIGN KEY ([tag_id]) REFERENCES [dbo].[Tag]([tag_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

