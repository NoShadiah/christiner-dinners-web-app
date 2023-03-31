"""controller

Revision ID: d8f481ffc2d6
Revises: d47ed81bc5d4
Create Date: 2023-03-31 13:16:09.491220

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8f481ffc2d6'
down_revision = 'd47ed81bc5d4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('registered_at',
               existing_type=sa.DATETIME(),
               type_=sa.String(length=200),
               existing_nullable=True)
        batch_op.alter_column('updated_at',
               existing_type=sa.DATETIME(),
               type_=sa.String(length=200),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('updated_at',
               existing_type=sa.String(length=200),
               type_=sa.DATETIME(),
               existing_nullable=True)
        batch_op.alter_column('registered_at',
               existing_type=sa.String(length=200),
               type_=sa.DATETIME(),
               existing_nullable=True)

    # ### end Alembic commands ###