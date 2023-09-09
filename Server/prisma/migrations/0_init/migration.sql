BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Account] (
    [account_id] VARCHAR(225) NOT NULL,
    [email] VARCHAR(225) NOT NULL,
    [account_name] NVARCHAR(225) NOT NULL,
    [hash_password] TEXT,
    [isBan] BIT CONSTRAINT [DF__Account__isBan__4F7CD00D] DEFAULT 0,
    [role_id] INT CONSTRAINT [DF__Account__role_id__5070F446] DEFAULT 3,
    [created_date] DATE CONSTRAINT [DF__Account__created__52593CB8] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PK__Account__46A222CDACCCDF91] PRIMARY KEY CLUSTERED ([account_id])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [category_id] INT NOT NULL IDENTITY(1,1),
    [category_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Category__D54EE9B41F13B2AE] PRIMARY KEY CLUSTERED ([category_id])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [comment_id] VARCHAR(225) NOT NULL,
    [content] NTEXT NOT NULL,
    [account_id] VARCHAR(225),
    [post_id] VARCHAR(225),
    [created_date] DATE CONSTRAINT [DF__Comment__created__5EBF139D] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Comment__E7957687DA57BEF0] PRIMARY KEY CLUSTERED ([comment_id])
);

-- CreateTable
CREATE TABLE [dbo].[Favor] (
    [account_id] VARCHAR(225),
    [product_id] VARCHAR(225)
);

-- CreateTable
CREATE TABLE [dbo].[Post] (
    [post_id] VARCHAR(225) NOT NULL,
    [image] TEXT,
    [post_json] NTEXT NOT NULL,
    [category_id] INT,
    [created_date] DATE CONSTRAINT [DF__Post__created_da__59FA5E80] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Post__3ED7876657ED58C1] PRIMARY KEY CLUSTERED ([post_id])
);

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [product_id] VARCHAR(225) NOT NULL,
    [product_json] NTEXT NOT NULL,
    [image] TEXT,
    [video] TEXT,
    [created_date] DATE CONSTRAINT [DF__Product__created__5535A963] DEFAULT CURRENT_TIMESTAMP,
    [created_by] VARCHAR(225),
    CONSTRAINT [PK__Product__47027DF5B02C0E26] PRIMARY KEY CLUSTERED ([product_id])
);

-- CreateTable
CREATE TABLE [dbo].[Product_Tag] (
    [product_id] VARCHAR(225),
    [tag_id] INT
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [role_id] INT NOT NULL IDENTITY(1,1),
    [role_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Role__760965CCEAC62FA8] PRIMARY KEY CLUSTERED ([role_id])
);

-- CreateTable
CREATE TABLE [dbo].[Tag] (
    [tag_id] INT NOT NULL IDENTITY(1,1),
    [tag_name] NVARCHAR(100) NOT NULL,
    CONSTRAINT [PK__Tag__4296A2B6AAA495D6] PRIMARY KEY CLUSTERED ([tag_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [FK__Account__role_id__5165187F] FOREIGN KEY ([role_id]) REFERENCES [dbo].[Role]([role_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK__Comment__created__5FB337D6] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [FK__Comment__post_id__5DCAEF64] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Post]([post_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Favor] ADD CONSTRAINT [FK__Favor__account_i__619B8048] FOREIGN KEY ([account_id]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Favor] ADD CONSTRAINT [FK__Favor__product_i__628FA481] FOREIGN KEY ([product_id]) REFERENCES [dbo].[Product]([product_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__category_i__59063A47] FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__created_by__5AEE82B9] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [FK__Product__created__5629CD9C] FOREIGN KEY ([created_by]) REFERENCES [dbo].[Account]([account_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product_Tag] ADD CONSTRAINT [FK__Product_T__produ__6477ECF3] FOREIGN KEY ([product_id]) REFERENCES [dbo].[Product]([product_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Product_Tag] ADD CONSTRAINT [FK__Product_T__tag_i__656C112C] FOREIGN KEY ([tag_id]) REFERENCES [dbo].[Tag]([tag_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

