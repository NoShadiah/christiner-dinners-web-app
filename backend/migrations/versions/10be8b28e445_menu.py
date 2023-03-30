"""menu

Revision ID: 10be8b28e445
Revises: be374fe06a29
Create Date: 2023-03-29 15:11:01.630011

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '10be8b28e445'
down_revision = 'be374fe06a29'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Menu', schema=None) as batch_op:
        batch_op.add_column(sa.Column('upd_by', sa.String(length=50), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('Menu', schema=None) as batch_op:
        batch_op.drop_column('upd_by')

    # ### end Alembic commands ###